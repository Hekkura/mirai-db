import { defineStore } from "pinia";

export const useAnimeListStore = defineStore("animeList", {
    state: () => ({
        animeList: [],
        isLoading: false,
        error: ""
    }),
    actions: {
        async getAnime(category:string, searchQuery:string){
                this.isLoading = true
            try{
                const response = await fetch(`https://api.jikan.moe/v4/${category}?q=${searchQuery}`)
                if(!response.ok){
                    throw new Error (`HTTP Error : ${response.status}`)
                }
                const result = await response.json()
                this.animeList = result.data
            } catch (err) { 
                this.error = err instanceof Error ? err.message : String(err);
            } finally { 
                this.isLoading = false
            }
        }
    },
    
})