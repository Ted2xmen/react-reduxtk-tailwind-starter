import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "link",
  initialState: {
    links: [
      {
        name: "Starter Repository",
        color: "decoration-orange-500",
        url: "https://github.com/Ted2xmen/react-reduxtk-tailwind-starter",
      },
      {
        name: "Redux Toolkit Notlarım (TR)",
        color: "decoration-red-700",
        url: "https://github.com/Ted2xmen/turkce-redux-toolkit-notlari",
      },
    ],
  },
});

export default linkSlice.reducer;
