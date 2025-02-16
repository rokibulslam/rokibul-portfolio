"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
    "https://i.ibb.co.com/7Q4t7HM/orboroi-industry.png",
  ];

  const features = [
    "Real-time analytics with customizable widgets",
    "Advanced filtering and data export capabilities",
    "Responsive design for seamless mobile experience",
    "Integrated notification system",
  ];

  const technologies = [
    "React.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  const relatedStudies = [
    {
      title: "User Research Findings",
      description: "Understanding user behavior patterns",
    },
    {
      title: "Performance Metrics",
      description: "Impact on business efficiency",
    },
    {
      title: "Implementation Strategy",
      description: "Technical approach and solutions",
    },
  ];

  return (
    <div className=" mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">E-Commerce Dashboard Redesign</h1>
      <p className="text-gray-600 mb-8">
        A complete overhaul of the client's e-commerce analytics platform
      </p>

      <div className="mb-8">
        <div className="bg-gray-100 rounded-lg p-4 mb-4 grid grid-cols-12">
          <div className="col-span-10 flex justify-center items-center h-[500px] w-full overflow-scroll">
            <img
              src={images[selectedImage]}
              alt={`Preview ${selectedImage + 1}`}
              className=" rounded-lg mb-4"
            />
          </div>
          <div className="col-span-2 overflow-scroll h-[500px] flex justify-center items-center gap-5 flex-col">
            {images.map((img, index) => (
              <img
                width={100}
                height={50}
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer rounded-lg transition-all ${
                  selectedImage === index ? "p-2 ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600">
                This comprehensive dashboard redesign project focused on
                improving the user experience and functionality of an e-commerce
                analytics platform. The new design implements modern UI
                patterns, enhanced data visualization, and improved navigation
                flow to help users better understand their business metrics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Related Case Studies</h2>
              <div className="space-y-4">
                {relatedStudies.map((study) => (
                  <div
                    key={study.title}
                    className="cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <h3 className="font-semibold">{study.title}</h3>
                    <p className="text-sm text-gray-600">{study.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
