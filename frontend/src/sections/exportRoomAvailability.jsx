
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportRoomAvailability = () => {

  const excelData = [];

  // ==========================
  // SUMMARY
  // ==========================

  excelData.push({
    Section: "SUMMARY",
    Status: "Occupied",
    Rooms: 72,
  });

  excelData.push({
    Section: "",
    Status: "Reserved",
    Rooms: 18,
  });

  excelData.push({
    Section: "",
    Status: "Available",
    Rooms: 8,
  });

  excelData.push({
    Section: "",
    Status: "Maintenance",
    Rooms: 2,
  });

  excelData.push({});

  // ==========================
  // OCCUPIED ROOMS (72)
  // ==========================

  excelData.push({
    Section: "OCCUPIED ROOMS",
    RoomNo: "Room No",
    Type: "Type",
    Status: "Status",
  });

  for (let i = 1; i <= 72; i++) {
    excelData.push({
      RoomNo: 100 + i,
      Type:
        i <= 20
          ? "Deluxe"
          : i <= 38
          ? "Executive"
          : i <= 50
          ? "Suite"
          : "Standard",
      Status: "Occupied",
    });
  }

  excelData.push({});

  // ==========================
  // RESERVED ROOMS (18)
  // ==========================

  excelData.push({
    Section: "RESERVED ROOMS",
    RoomNo: "Room No",
    Type: "Type",
    Status: "Status",
  });

  for (let i = 1; i <= 18; i++) {
    excelData.push({
      RoomNo: 300 + i,
      Type: "Reserved",
      Status: "Reserved",
    });
  }

  excelData.push({});

  // ==========================
  // AVAILABLE ROOMS (8)
  // ==========================

  excelData.push({
    Section: "AVAILABLE ROOMS",
    RoomNo: "Room No",
    Type: "Type",
    Status: "Status",
  });

  for (let i = 1; i <= 8; i++) {
    excelData.push({
      RoomNo: 500 + i,
      Type: "Standard",
      Status: "Available",
    });
  }

  excelData.push({});

  // ==========================
  // MAINTENANCE (2)
  // ==========================

  excelData.push({
    Section: "MAINTENANCE ROOMS",
    RoomNo: "Room No",
    Type: "Type",
    Status: "Status",
  });

  for (let i = 1; i <= 2; i++) {
    excelData.push({
      RoomNo: 700 + i,
      Type: "Suite",
      Status: "Maintenance",
    });
  }

  const worksheet = XLSX.utils.json_to_sheet(excelData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Room Availability Report"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const data = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(
    data,
    `RoomAvailabilityReport.xlsx`
  );
};

