import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardOverflow from "@mui/joy/CardOverflow";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {list.map((ele, index) => {
              return (
                <CssVarsProvider key={index}>
                  <Card className={"card"}>
                    <CardCover>
                      <img src={ele.imagePath} alt="" />
                    </CardCover>
                    <CardCover className={"card-cover"} />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          level="h2"
                          fontSize="lg"
                          textColor="#fff"
                          mb={1}
                        >
                          {ele.productName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          20
                          <VisibilityIcon
                            sx={{ fontSize: 25, marginLeft: "5px" }}
                          />
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        height: "60px",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="neutral.300"
                      >
                        This is delicious meal
                      </Typography>
                    </CardOverflow>
                  </Card>

                  {/* <Card variant="outlined" sx={{ width: 320 }}>
                    <CardOverflow>
                      <AspectRatio ratio="2">
                        <img
                          src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                          srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="danger"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                        }}
                      >
                        <Favorite />
                      </IconButton>
                    </CardOverflow>
                    <CardContent>
                      <Typography level="title-md">
                        <Link href="#multiple-actions" overlay underline="none">
                          Yosemite National Park
                        </Link>
                      </Typography>
                      <Typography level="body-sm">
                        <Link href="#multiple-actions">California</Link>
                      </Typography>
                    </CardContent>
                    <CardOverflow variant="soft">
                      <Divider inset="context" />
                      <CardContent orientation="horizontal">
                        <Typography level="body-xs">6.3k views</Typography>
                        <Divider orientation="vertical" />
                        <Typography level="body-xs">1 hour ago</Typography>
                      </CardContent>
                    </CardOverflow>
                  </Card> */}
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
