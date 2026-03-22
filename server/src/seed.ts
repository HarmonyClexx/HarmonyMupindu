import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.model';

dotenv.config();

const harmonyProjects = [
    {
        title: "Generic Events Consumer",
        category: "Professional",
        description: "A high-throughput service that consumes events from Redis, processes them, and publishes to Kafka for action item creation. Focused on reducing latency and improving processing efficiency.",
        techStack: ["Node.js", "Redis", "Apache Kafka", "TypeScript"],
        isFeatured: true
    },
    {
        title: "Paradigm Document Router Migration",
        category: "Professional",
        description: "Led the migration from C# Elsa workflows to a modern TypeScript architecture using Temporal.io for resilient workflow orchestration.",
        techStack: ["TypeScript", "Temporal", "Node.js", "Docker"],
        isFeatured: true
    },
    {
        title: "RESTful Authentication API",
        category: "Personal",
        description: "Spring-style architecture for secure Android authentication, featuring credential storage and profile management.",
        techStack: ["Java", "MySQL", "Swagger", "Postman"],
        githubLink: "https://github.com/harmonymupindu", // Update with real link
        isFeatured: false
    },
    {
        title: "Stock/Inventory Management System",
        category: "Personal",
        description: "Full CRUD application for tracking stock levels and item imagery with persistent database storage.",
        techStack: ["C#", "MS SQL Server", ".NET"],
        isFeatured: false
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        await Project.deleteMany({});
        await Project.insertMany(harmonyProjects);
        console.log("Harmony's CV data seeded successfully!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();