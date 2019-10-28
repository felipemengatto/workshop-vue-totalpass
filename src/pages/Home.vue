<template>
    <div class="row h-100">
        <div class="col d-flex flex-column justify-content-center align-items-center">
            <img class="mb-4" src="../assets/images/segfitness.png">
            <router-link
                to="/user-registration"
                tag="button"
                class="btn btn-primary btn-lg rounded-pill"
            >
                Criar Conta
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>