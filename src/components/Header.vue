<template>
<header>
    <nav>
        <ul>
            <li><a href="#">Job Applications</a></li>
            <li><a href="#">Account</a></li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
header {
    width: 100vw;
    background: black;
}
nav {
    width: var(--page-width);
    margin: auto;
    background: blue;
    display: grid;
    grid-template-columns: repeat(1fr, 6);
}

ul {
    grid-column: 3 / 6;
    background: red;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0;
}

li {
    padding: 0 2rem;
    font-weight: 500;
}

li > a {

    color: black;
}

</style>