// import e from "express";
// import cors from "cors";
// // import cookeParser from "cookie-parser";

 
// const app = e();
// app.use(e.json({
    // limit: "32kb"
// }));
// // app.use(e.urlencoded({ extended: true , limit: "32kb" }));
// app.use(e.static("public"));
// 
// app.use(
    // cors({
        // origin: "*",
        // // methods: ["GET", "POST", "PUT", "DELETE"],
        // credentials: true,
        // // // allowedHeaders: ["Content-Type", "Authorization"],
    // })
// )
// app.use(cookeParser());
// 
// 
// app.get("/", (req, res) => {
    // res.send("API is running....");
// });
// 
// 
// // import healthCheckRoute from "./routes/healthCheck.route.js";
// // import userRoute from "./routes/user.route.js";
// 
// app.use("/api/v1", healthCheckRoute);
// app.use("/api/v1", userRoute);
// 
// export default app;








import e from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // fix typo: cookeParser → cookieParser

const app = e();
app.use(e.json({ limit: "32kb" }));
app.use(e.urlencoded({ extended: true, limit: "32kb" }));
app.use(e.static("public"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running....");
});

// Existing routes
import healthCheckRoute from "./routes/healthCheck.route.js";
import userRoute from "./routes/user.route.js";
app.use("/api/v1", healthCheckRoute);
app.use("/api/v1", userRoute);

// ✅ Emergency Contact Route
import emergencyContactRoute from "./routes/emergencyContact.route.js";
app.use("/api/v1/emergency-contacts", emergencyContactRoute);

export default app;
