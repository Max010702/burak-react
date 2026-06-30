import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Stastics";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}

// <Card className="card">
//   <CardCover>
//     <img src={ele.imagePath} alt="" />
//   </CardCover>
//   <CardCover className="card-cover"/>
//   <CardContent sx={{justifyContent: "flex-end"}}>
//     <Stack
//     flexDirection={"row"}
//     justifyContent={"space-between"}>
//       <Typography level="h2" fontSize={"lg"} textColor={"#fff"} mb={1}> {ele.productName}

//       </Typography>
//     </Stack>
//   </CardContent>
// </Card>
