interface GameEngineOptions {
  onGameOver: (score: number) => void;
  onScoreUpdate: (score: number) => void;
}

class GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  intersects(other: GameObject): boolean {
    return !(
      this.x + this.width < other.x ||
      other.x + other.width < this.x ||
      this.y + this.height < other.y ||
      other.y + other.height < this.y
    );
  }
}

class Dino extends GameObject {
  private readonly gravity = 1.5;
  private readonly jumpForce = -20;
  private velocityY = 0;
  private isJumping = false;
  private readonly groundY: number;
  private readonly initialY: number;

  constructor(canvas: HTMLCanvasElement) {
    const width = 40;
    const height = 60;
    const x = 50;
    const groundY = canvas.height - height - 20; // 20 是地面高度
    super(x, groundY, width, height);
    this.groundY = groundY;
    this.initialY = groundY;
    console.log("Dino created at:", { x, y: groundY, width, height });
  }

  jump() {
    if (!this.isJumping) {
      this.velocityY = this.jumpForce;
      this.isJumping = true;
      console.log("Dino jumped");
    }
  }

  update() {
    if (this.isJumping) {
      this.velocityY += this.gravity;
      this.y += this.velocityY;

      if (this.y > this.groundY) {
        this.y = this.groundY;
        this.velocityY = 0;
        this.isJumping = false;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // 绘制恐龙身体
    ctx.fillStyle = "#2D3748";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // 绘制眼睛
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x + this.width - 15, this.y + 10, 6, 6);

    // 绘制腿
    ctx.fillStyle = "#2D3748";
    const legWidth = 8;
    const legHeight = 20;
    if (!this.isJumping) {
      // 左腿
      ctx.fillRect(this.x + 5, this.y + this.height, legWidth, legHeight);
      // 右腿
      ctx.fillRect(
        this.x + this.width - legWidth - 5,
        this.y + this.height,
        legWidth,
        legHeight
      );
    }
    console.log("Drawing dino at:", { x: this.x, y: this.y });
  }

  reset() {
    this.y = this.initialY;
    this.velocityY = 0;
    this.isJumping = false;
  }
}

class Obstacle extends GameObject {
  constructor(canvas: HTMLCanvasElement, speed: number) {
    const width = 20;
    const minHeight = 40;
    const maxHeight = 80;
    const height = Math.random() * (maxHeight - minHeight) + minHeight;
    const x = canvas.width;
    const y = canvas.height - height - 20; // 20 是地面高度
    super(x, y, width, height, speed);
    console.log("Obstacle created at:", { x, y, width, height });
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // 绘制障碍物主体
    ctx.fillStyle = "#C53030";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // 添加纹理
    ctx.fillStyle = "#9B2C2C";
    const stripeWidth = 4;
    for (let i = 0; i < this.height; i += 10) {
      ctx.fillRect(this.x, this.y + i, this.width, stripeWidth);
    }
    console.log("Drawing obstacle at:", { x: this.x, y: this.y });
  }
}

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dino: Dino;
  private obstacles: Obstacle[] = [];
  private score = 0;
  private gameSpeed = 8;
  private isRunning = false;
  private animationFrameId: number | null = null;
  private lastObstacleTime = 0;
  private readonly minObstacleInterval = 1200;
  private readonly options: GameEngineOptions;

  constructor(canvas: HTMLCanvasElement, options: GameEngineOptions) {
    console.log("Initializing GameEngine");
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    this.ctx = ctx;
    this.options = options;

    // 创建恐龙
    this.dino = new Dino(canvas);
    console.log("Canvas dimensions:", {
      width: canvas.width,
      height: canvas.height
    });

    // 绑定事件处理器
    this.handleJump = this.handleJump.bind(this);
    window.addEventListener("keydown", this.handleJump);
    canvas.addEventListener("click", this.handleJump);

    // 立即绘制初始场景
    this.draw();
  }

  private handleJump(event: KeyboardEvent | MouseEvent) {
    if (
      event instanceof KeyboardEvent &&
      event.code !== "Space" &&
      event.key !== " "
    ) {
      return;
    }
    if (this.isRunning) {
      console.log("Jump triggered");
      this.dino.jump();
    }
  }

  private createObstacle() {
    const obstacle = new Obstacle(this.canvas, this.gameSpeed);
    this.obstacles.push(obstacle);
    console.log("Created new obstacle");
  }

  private update() {
    if (!this.isRunning) return;

    // 更新恐龙
    this.dino.update();

    // 更新并清理障碍物
    this.obstacles = this.obstacles.filter((obstacle) => {
      obstacle.update();
      return obstacle.x + obstacle.width > 0;
    });

    // 创建新障碍物
    const now = Date.now();
    if (now - this.lastObstacleTime > this.minObstacleInterval) {
      if (Math.random() < 0.3) {
        this.createObstacle();
        this.lastObstacleTime = now;
      }
    }

    // 碰撞检测
    for (const obstacle of this.obstacles) {
      if (this.dino.intersects(obstacle)) {
        console.log("Collision detected");
        this.gameOver();
        return;
      }
    }

    // 更新分数和游戏速度
    this.score++;
    if (this.score % 500 === 0) {
      this.gameSpeed += 0.5;
      console.log("Speed increased to:", this.gameSpeed);
    }
    this.options.onScoreUpdate(Math.floor(this.score / 10));
  }

  private draw() {
    // 清空画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 绘制背景
    this.ctx.fillStyle = "#F7FAFC";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 绘制地面
    this.ctx.fillStyle = "#4A5568";
    this.ctx.fillRect(0, this.canvas.height - 20, this.canvas.width, 20);

    // 绘制恐龙和障碍物
    this.dino.draw(this.ctx);
    this.obstacles.forEach((obstacle) => obstacle.draw(this.ctx));

    // 绘制分数
    this.ctx.fillStyle = "#2D3748";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${Math.floor(this.score / 10)}`, 20, 30);
  }

  private gameLoop = () => {
    if (!this.isRunning) return;

    this.update();
    this.draw();
    this.animationFrameId = requestAnimationFrame(this.gameLoop);
  };

  start() {
    if (this.isRunning) return;

    console.log("Starting game");
    this.isRunning = true;
    this.score = 0;
    this.gameSpeed = 8;
    this.obstacles = [];
    this.lastObstacleTime = Date.now();
    this.dino.reset();

    // 开始游戏循环
    this.gameLoop();
  }

  stop() {
    console.log("Stopping game");
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private gameOver() {
    console.log("Game Over");
    this.stop();
    this.options.onGameOver(Math.floor(this.score / 10));
  }

  destroy() {
    this.stop();
    window.removeEventListener("keydown", this.handleJump);
    this.canvas.removeEventListener("click", this.handleJump);
  }
}
