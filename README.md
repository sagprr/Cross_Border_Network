# 🛰️ Border Weapons & Vehicles Inventory Monitoring and Image Comparison System

## Overview

This project presents an intelligent, real-time monitoring system designed for **cross-border defense surveillance**, focusing on the detection, comparison, and inventory management of weapons, vehicles, and other strategic assets. Using **satellite imagery and field-level images**, the system performs **semantic segmentation** and **visual comparison** to identify structural or inventory changes and updates them into a central database.

It integrates **computer vision**, **cloud databases**, and a **user-friendly dashboard** for defense analysts to receive alerts, perform image comparisons, and manage cross-border inventory data.

---

## 🔍 Key Features

- 🔄 **Image Comparison & Change Detection**: Compare satellite and real-time field images using OpenCV + Deep Learning (UNet-based segmentation).
- 🚧 **Object Detection & Inventory Classification**: Detect and classify weapons, vehicles, or infrastructure elements from images.
- 🧠 **Semantic Segmentation**: Apply UNet++ models from the Jupyter notebook (`segmentation.ipynb`) to extract masked segments of interest.
- ☁️ **Firebase Integration**: Real-time database and user authentication via Firebase.
- 🌐 **React.js Dashboard**: Clean, modular UI for accessing detections and updating inventories.
- 🌍 **MongoDB Atlas**: Secure, cloud-native database to store and retrieve inventory entries and image metadata.

---

## 🛠️ Tech Stack

| Component      | Technology               |
|----------------|--------------------------|
| Frontend       | React.js                 |
| Backend        | Node.js (optional), Firebase |
| Image Analysis | OpenCV, UNet++ (PyTorch) |
| Realtime DB    | Firebase Realtime Database |
| Cloud Storage  | Firebase Storage / MongoDB Atlas |
| Model Training | Python, Jupyter Notebook |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/border-monitoring-system.git
cd border-monitoring-system
