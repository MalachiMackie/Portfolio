<script lang="ts">
    import Project from "../models/Project";
    import {GetLanguageName} from "../models/Language";

    export let project: Project;
</script>

<div id="tile">
    <h2><a href="{project.repoUrl}" target="_blank">{project.name}</a></h2>
    <p>Language: {GetLanguageName(project.language)}</p>
    <img src="{project.imageUrl}" alt="{project.name} image">
    <p>{project.smallDescription}</p>
</div>

<style>

    div#tile {
        border: black solid 1px;
        border-radius: 15px;
    }

</style>