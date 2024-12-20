"use client";

import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { banners } from "@/constants/banners";
import { useEffect, useState, useRef } from "react";

// 导入 slick 样式
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(
          0,
          Math.min(1, 1 - rect.bottom / rect.height)
        );
        setScrollY(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <Box
      ref={bannerRef}
      position="relative"
      height={{ base: "400px", md: "500px" }}
      overflow="hidden"
      sx={{
        ".slick-dots": {
          bottom: "20px",
          li: {
            margin: "0 4px",
            button: {
              "&:before": {
                color: "white",
                fontSize: "12px",
                opacity: 0.7
              }
            },
            "&.slick-active button:before": {
              opacity: 1
            }
          }
        },
        ".slick-prev, .slick-next": {
          zIndex: 1,
          width: "40px",
          height: "40px",
          "&:before": {
            fontSize: "40px"
          }
        },
        ".slick-prev": {
          left: "20px"
        },
        ".slick-next": {
          right: "20px"
        }
      }}
    >
      <Slider {...settings}>
        {banners.map((banner) => (
          <Box key={banner.id} height={{ base: "400px", md: "500px" }}>
            <Box
              position="relative"
              height="100%"
              bgImage={`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%), url(${banner.imageUrl})`}
              bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
              display="flex"
              alignItems="center"
              transform={`scale(${1 + scrollY * 0.1}) translateY(${
                scrollY * 50
              }px)`}
              style={{
                transformOrigin: "center",
                willChange: "transform"
              }}
            >
              <Container
                maxW="container.lg"
                position="relative"
                zIndex={2}
                py={8}
                transform={`translateY(${-scrollY * 100}px)`}
                opacity={1 - scrollY * 1.5}
                transition="transform 0.1s linear"
              >
                <Box
                  maxW="600px"
                  transform={`translateX(${-scrollY * 50}px)`}
                  transition="transform 0.1s linear"
                >
                  <Heading
                    as="h2"
                    size="2xl"
                    mb={4}
                    color="white"
                    textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                  >
                    {banner.title}
                  </Heading>
                  <Text
                    fontSize="xl"
                    mb={6}
                    color="white"
                    textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                  >
                    {banner.description}
                  </Text>
                  <Button
                    size="lg"
                    bgGradient={`linear(to-r, ${banner.color}, ${
                      banner.color.split(".")[0]
                    }.600)`}
                    color="white"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "xl",
                      bgGradient: `linear(to-r, ${
                        banner.color.split(".")[0]
                      }.600, ${banner.color})`
                    }}
                    onClick={() => router.push(banner.link)}
                    transition="all 0.2s"
                  >
                    立即开始
                  </Button>
                </Box>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
