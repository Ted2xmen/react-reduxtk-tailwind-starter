import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: 'links',
  initialState: {
    li: [
      {
        name: 'Starter Repository',
        color: 'decoration-orange-500',
        url: 'https://github.com/Ted2xmen/react-reduxtk-tailwind-starter',
      },
      {
        name: 'Redux Toolkit Notlarım (TR)',
        color: 'decoration-red-700',
        url: 'https://github.com/Ted2xmen/turkce-redux-toolkit-notlari',
      },
      {
        name: 'Personal',
        color: 'decoration-indigo-500',
        url: 'https://ted2xmen.dev',
      },
    ],
  },
})

export default linkSlice.reducer;
