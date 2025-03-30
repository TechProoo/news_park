import express from "express";
import { getAllPosts, getPosts, postBlog } from "../Controllers/posts";
import { upload } from "../Middleware/Multer";
import { authenticate } from "../Middleware/authMiddleware";

const router = express.Router();

router.post("/post", upload.single("file"), async (req, res, next) => {
  try {
    await postBlog(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/allpost", async (req, res, next) => {
  try {
    await getAllPosts(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/posts/:id", async (req, res, next) => {
  try {
    await getPosts(req, res);
  } catch (error) {
    next(error);
  }
});

// import { useEffect, useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { FileText, Users, FileImage, ArrowUpRight } from "lucide-react";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import { getAllPost, getUserPost, token } from "@/api";
// import { jwtDecode } from "jwt-decode";

// interface DashboardStat {
//   title: string;
//   value: number;
//   description: string;
//   icon: React.ReactNode;
//   change?: number;
// }

// const Dashboard = () => {
//   const [stats, setStats] = useState<DashboardStat[]>([]);
//   const navigate = useNavigate();

//   // Memoize decoded token to prevent unnecessary renders
//   const decoded: any = useMemo(() => jwtDecode(token), [token]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const allPost = await getAllPost();
//         if (!allPost) {
//           console.error("Failed to fetch posts");
//           return navigate("/auth"); // Only navigate when necessary
//         }

//         const userPosts = await getUserPost(decoded.id);

//         const postsWithImages = allPost.data.filter(
//           (post: any) => post.image
//         ).length;

//         const uniqueAuthors = new Set(
//           allPost.data.map((post: any) => post.user_id)
//         ).size;

//         // Avoid infinite loop by ensuring `setStats` only updates if necessary
//         setStats((prevStats) => {
//           const newStats = [
//             {
//               title: "Total Posts",
//               value: allPost.data.length,
//               description: "All published posts",
//               icon: <FileText className="h-5 w-5" />,
//               change: 12,
//             },
//             {
//               title: "Active Authors",
//               value: uniqueAuthors,
//               description: "Contributors",
//               icon: <Users className="h-5 w-5" />,
//               change: -5,
//             },
//             {
//               title: "Media Uploads",
//               value: postsWithImages,
//               description: "Images in posts",
//               icon: <FileImage className="h-5 w-5" />,
//               change: 23,
//             },
//           ];

//           // Check if stats actually changed to avoid unnecessary re-renders
//           return JSON.stringify(prevStats) === JSON.stringify(newStats)
//             ? prevStats
//             : newStats;
//         });
//       } catch (error) {
//         console.error("Failed to load dashboard data", error);
//       }
//     };

//     fetchUsers();
//   }, [decoded.id, navigate]); // Only re-run when `decoded.id` or `navigate` changes

//   return (
//     <DashboardLayout>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="space-y-8"
//       >
//         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//         <p className="text-muted-foreground mt-2">
//           Welcome to your NewsPark dashboard.
//         </p>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Card className="hover-lift">
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-sm font-medium text-muted-foreground">
//                     {stat.title}
//                   </CardTitle>
//                   <div className="p-2 rounded-full bg-secondary/50 text-foreground">
//                     {stat.icon}
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                   <p className="text-xs text-muted-foreground mt-1">
//                     {stat.description}
//                   </p>
//                   {stat.change !== undefined && (
//                     <div className="flex items-center gap-1 mt-2">
//                       <span
//                         className={`text-xs ${
//                           stat.change > 0
//                             ? "text-green-500"
//                             : stat.change < 0
//                             ? "text-red-500"
//                             : "text-muted-foreground"
//                         }`}
//                       >
//                         {stat.change > 0 ? "+" : ""}
//                         {stat.change}%
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         from last month
//                       </span>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;

export default router;
