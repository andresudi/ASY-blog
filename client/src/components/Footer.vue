<template>
    <div class="footer">
        <v-footer dark height="auto">
            <v-card class="flex">
                <v-card-title class="footer">
                    <strong class="subheading" style="color: white;">Get connected with us on social networks!</strong>
                    <v-spacer></v-spacer>
                    <v-btn v-for="icon in icons" :key="icon.icon">
                        <v-icon class="icon" style="color: red;" size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-title>
    
                <v-card-actions class="footer-2 justify-center">
                    &copy;2018 — <strong>LUGO-Blog</strong>
                </v-card-actions>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'fa fa-facebook',
                'fa fa-twitter',
                'fa fa-google-plus',
                'fa fa-linkedin',
                'fa fa-instagram',
            ]
        })
    }
</script>

<style>
    .footer {
        background-color: #293D52;
        color: #293D52;
    }
    
    .footer-2 {
        background-color: #FFFFFF;
        color: #293D52;
    }
</style>