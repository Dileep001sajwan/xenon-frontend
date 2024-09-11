"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

const PropertyListingPage = () => {
  const [properties] = useState(dummyProperties); // Using dummy data for now

  return (
    <>
      <div>
        <Navbar />
        <main className="pt-16 px-6 py-8 bg-gray-50">
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center mb-10">
              Property Listings
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={property.image}
                    alt={property.title}
                    onError={(e) => (e.target.src = "/images/fallback.jpg")} // Fallback if the image URL is broken
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {property.title}
                    </h2>
                    <p className="text-gray-600">{property.price}</p>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-gray-600 mt-2">
                      {property.type === "rent" ? "For Rent" : "For Sale"}
                    </p>
                    <button
                      onClick={() =>
                        alert(`Viewing details for ${property.title}`)
                      }
                      className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

// Dummy property data with real image URLs
const dummyProperties = [
  {
    id: 1,
    title: "Modern 2 Bedroom Apartment",
    price: "$1200/month",
    location: "New York, NY",
    description:
      "A beautiful and spacious 2 bedroom apartment in the heart of New York.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "rent",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: "$1,500,000",
    location: "Los Angeles, CA",
    description:
      "A luxurious villa with a private pool and large garden in Beverly Hills.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "sale",
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    price: "$900/month",
    location: "Chicago, IL",
    description:
      "A cozy studio apartment, perfect for young professionals or students.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MzExMTQwMTY&ixlib=rb-1.2.1&q=80&w=1080",
    type: "rent",
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    price: "$900/month",
    location: "Chicago, IL",
    description:
      "A cozy studio apartment, perfect for young professionals or students.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MzExMTQwMTY&ixlib=rb-1.2.1&q=80&w=1080",
    type: "rent",
  },
  {
    id: 5,
    title: "Cozy Studio Apartment",
    price: "$900/month",
    location: "Chicago, IL",
    description:
      "A cozy studio apartment, perfect for young professionals or students.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MzExMTQwMTY&ixlib=rb-1.2.1&q=80&w=1080",
    type: "rent",
  },
  {
    id: 6,
    title: "Modern 2 Bedroom Apartment",
    price: "$1200/month",
    location: "New York, NY",
    description:
      "A beautiful and spacious 2 bedroom apartment in the heart of New York.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "rent",
  },
];

export default PropertyListingPage;
