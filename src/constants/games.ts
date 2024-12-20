export const games = [
  {
    title: "五子棋",
    description: "经典的五子棋游戏，考验策略与智慧",
    imageUrl: "/images/games/gomoku.svg",
    gameUrl: "/games/gomoku",
    isComingSoon: false
  },
  {
    title: "2048",
    description: "数字叠加游戏，激发你的思维能力",
    imageUrl: "/images/games/2048.svg",
    gameUrl: "/games/2048",
    isComingSoon: false
  },
  {
    title: "恐龙避障",
    description: "经典的跑酷游戏，考验反应能力",
    imageUrl: "/images/games/dino.svg",
    gameUrl: "/games/dino",
    isComingSoon: false
  },
  {
    title: "更多游戏",
    description: "更多精彩游戏即将推出，敬请期待",
    imageUrl: "/images/games/more.svg",
    isComingSoon: true
  }
] as const;
