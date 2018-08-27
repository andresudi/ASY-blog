<template>
    <div id="app">
        <v-container row wrap>
            <v-carousel hide-delimiters >
                <v-carousel-item style="height: 100%;" v-for="image in carouselImg" :src="image.imgsrc" :key="image.id">
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carouselImg: [{
                        imgsrc: "https://data.whicdn.com/images/298323790/original.gif",
                    },
                    {
                        imgsrc: 'https://gifer.com/i/5SWi.gif',
                    },
                    {
                        imgsrc: 'https://lh3.googleusercontent.com/-j_cHxAHE1oQ/VcMN4P404GI/AAAAAAAAEDM/JIj1P_mcz04/w500-h317/2015%2B-%2B1',
                    },
                    {
                        imgsrc: 'https://i.gifer.com/2VdV.gif'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
    }
    
    .inspire {
        height: 100vh;
    }

    .imageC {
        height: 100px;
    }
</style>
