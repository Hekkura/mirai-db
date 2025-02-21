import { defineStore } from "pinia";

export const useAnimeListStore = defineStore("animeList", {
    state: () => ({
        animeList: [],
        isLoading: false,
        category: "",
        error: "",
        cardCount: 0,
    }),
    actions: {
        async getAnime(category:string, searchQuery:string){
                console.log("hit API get")
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
                    // console.log(result)
                    // console.log(result.data)
                    
                    this.animeList = result.data
                    this.cardCount = result.pagination.current_page * result.pagination.items.per_page
                    console.log(this.cardCount)
                    // console.log(this.animeList)
                } catch (err) { 
                    this.error = err instanceof Error ? err.message : String(err);
                } finally { 
                    this.isLoading = false
                }
        },
        async getTopAnime(category:string){
            this.animeList = []
            this.category = ""

            this.isLoading = true
            this.category = category

            try{
                const response = await fetch(`https://api.jikan.moe/v4/top/${category}`)
                if(!response.ok){
                    throw new Error(`HTTP Error: ${response.status}`)
                }
                const result = await response.json()
                this.animeList = result.data
                this.cardCount = result.pagination.current_page * result.pagination.items.per_page
                console.log(this.cardCount)
            } catch (err) {
                this.error = err instanceof Error ? err.message : String(err);
            } finally {
                this.isLoading = false
            }

        },
        async getMoreScroll(category:string, searchQuery:string) {
            console.log("hit API get")
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
                console.log(result)
                console.log(result.data)
                
                this.animeList = result.data
                this.cardCount = result.pagination.current_page * result.pagination.items.per_page
                console.log(this.animeList)
                console.log(this.cardCount)
            } catch (err) { 
                this.error = err instanceof Error ? err.message : String(err);
            } finally { 
                this.isLoading = false
            }
        }
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
