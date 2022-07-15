import { defineStore } from 'pinia';

export const bannerStore = defineStore({
  id: 'banner-store',
  state: () => {
    return {
      banners: null
    }
  },
})