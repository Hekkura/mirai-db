import { defineStore } from "pinia";

export const useAnimeListStore = defineStore("animeList", {
    state: () => ({
        animeList: [],
        isLoading: false,
        category: "",
        error: "",
    }),
    actions: {
        async getAnime(category:string, searchQuery:string){
                this.animeList = []
                this.category = ""

                this.isLoading = true
                this.category = category
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
        },
    // async getCharacterDetail(id:any){
    //             this.isLoading=true
    //         try{

    //             const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/anime`)
    //             if(!response.ok) {
    //                 throw new Error(`HTTP Error : ${response.status}`)
    //             }
    //             const result = await response.json()
    //             this.characterAnime = result.data[0]?.anime?.title
    //         } catch (err) {
    //             this.error = err instanceof Error ? err.message : String(err);
    //         } finally {
    //             this.isLoading = false
    //         }
    //     },
    },
    
})
