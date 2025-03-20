"use client";
import React, { useState } from "react";
import {Card} from "@/src/app/components/ui/card"
import { Button} from "@/src/app/components/ui/button"
import { Input} from "@/src/app/components/ui/input"
import { motion } from "framer-motion";

const EventTicketApp = () => {
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    setPurchased(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <h2 className="text-2xl font-bold mb-4">Exclusive Event Ticket</h2>
          <p className="text-gray-600 mb-4">Join us for an unforgettable experience!</p>
          <Input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mb-4 text-center"
          />
          <p className="mb-4 font-semibold">Total: ${quantity * 50}</p>
          <Button onClick={handlePurchase}>
            Purchase Ticket
          </Button>
          {purchased && <p className="mt-4 text-green-600">Purchase Successful!</p>}
        </Card>
      </motion.div>
    </div>
  );
};

export default EventTicketApp;