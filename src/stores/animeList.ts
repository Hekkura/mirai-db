import { defineStore } from "pinia";

export const useAnimeListStore = defineStore("animeList", {
    state: () => ({
        animeList: [] as any[],
        isLoading: false,
        isFetchingMore: false,
        category: "",
        error: "",
        cardCount: 0,
        currentPage: 1,
        loadingIds : new Set<number>(),
        query: "",
    }),
    actions: {
        async getAnime(category:string, searchQuery:string){
                this.animeList = []
                this.currentPage = 1
                this.isLoading = true
                this.category = category
                this.query = searchQuery
                try{
                    const response = await fetch(`https://api.jikan.moe/v4/${category}?q=${searchQuery}?page=${this.currentPage}`)
                    if(!response.ok){
                        throw new Error (`HTTP Error : ${response.status}`)
                    }
                    const result = await response.json()
                    // console.log(result)
                    // console.log(result.data)
                    this.animeList.push(...result.data)
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
            this.currentPage = 1
            this.isLoading = true
            this.category = category
            this.query = ""

            try{
                const response = await fetch(`https://api.jikan.moe/v4/top/${category}?page=${this.currentPage}`)
                if(!response.ok){
                    throw new Error(`HTTP Error: ${response.status}`)
                }
                const result = await response.json()
                this.animeList.push(...result.data)
                this.cardCount = result.pagination.current_page * result.pagination.items.per_page
                console.log(this.cardCount)
            } catch (err) {
                this.error = err instanceof Error ? err.message : String(err);
            } finally {
                this.isLoading = false
            }

        },
        async getMoreScroll() {
            this.isLoading = true
            // this.category = category
            try{
                const response = await fetch(`https://api.jikan.moe/v4/${this.category}?q=${this.query}?page=${this.currentPage}`)
                if(!response.ok){
                    throw new Error (`HTTP Error : ${response.status}`)
                }
                const result = await response.json()
                this.animeList.push(...result.data)
                this.cardCount = result.pagination.current_page * result.pagination.items.per_page
            } catch (err) { 
                this.error = err instanceof Error ? err.message : String(err);
            } finally { 
                this.isLoading = false
            }
        },
        async getMoreTopScroll() {
            this.isLoading = true
            // this.category = category
            this.query = ""
            try{
                const response = await fetch(`https://api.jikan.moe/v4/top/${this.category}?page=${this.currentPage}`)
                if(!response.ok){
                    throw new Error(`HTTP Error: ${response.status}`)
                }
                const result = await response.json()
                this.animeList.push(...result.data)
                this.cardCount = result.pagination.current_page * result.pagination.items.per_page
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
