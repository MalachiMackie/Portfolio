<script lang="ts">
	import ProjectTile from "./components/ProjectTile.svelte";
	import Project from "./models/Project";
	import {GetProjectCategoryName, ProjectCategory} from "./models/ProjectCategory";
	import {Language} from "./models/Language";

	const projects: Project[] = [
		{
			name: 'Portfolio Website',
			imageUrl: '',
			repoUrl: '',
			smallDescription: 'Portfolio website to learn svelte',
			description: '',
			language: Language.typescript,
			category: ProjectCategory.WebDev
		},
		{
			name: 'Pong',
			repoUrl: 'https://github.com/MalachiMackie/Unity-Pong',
			imageUrl: '',
			smallDescription: 'Small pong game to for Unity practice',
			description: '',
			language: Language.csharp,
			category: ProjectCategory.GameDev
		},
		{
			name: 'Yahtzee',
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/yahtzee',
			smallDescription: 'Yahtzee game implemented in browser to learn React',
			description: '',
			language: Language.typescript,
			category: ProjectCategory.WebDev
		},
		{
			name: 'Breakout',
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/BreakOut',
			smallDescription: 'Breakout game implemented in Unity',
			language: Language.csharp,
			category: ProjectCategory.GameDev,
			description: ''
		},
		{
			name: 'Logic Gates Game',
			language: Language.csharp,
			description: '',
			category: ProjectCategory.GameDev,
			smallDescription: 'Abandoned Game Development project based around logic gates',
			repoUrl: 'https://github.com/MalachiMackie/LogicGates2D',
			imageUrl: ''
		},
		{
			name: 'Todoist Sync',
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/TodoistSync',
			language: Language.csharp,
			smallDescription: 'Abandoned project for syncing and extending features of todo list Todoist',
			category: ProjectCategory.BackendDev,
			description: ''
		},
		{
			name: 'Hazel Game Engine Tutorial',
			language: Language.cpp,
			description: '',
			category: ProjectCategory.GameDev,
			smallDescription: 'C++ Game Engine project following tutorial from The Cherno youtube channel',
			repoUrl: 'https://github.com/MalachiMackie/Hazel',
			imageUrl: ''
		},
		{
			name: 'Advent of Code 2021',
			language: Language.csharp,
			description: '',
			category: ProjectCategory.BackendDev,
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/AdventOfCode2021',
			smallDescription: 'Advent of code project for 2021'
		},
		{

			name: 'Advent of Code 2019',
			language: Language.csharp,
			description: '',
			category: ProjectCategory.BackendDev,
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/AdventOfCode2019',
			smallDescription: 'Advent of code project for 2019'
		},
		{
			name: 'GMTK Game Jam 2019',
			language: Language.csharp,
			description: '',
			category: ProjectCategory.GameDev,
			imageUrl: '',
			repoUrl: 'https://github.com/MalachiMackie/GMTKGameJam2019',
			smallDescription: 'Game Jam submission for GMTK Game Jam 2019'
		},
		{
			name: 'XWindow Playground',
			language: Language.cpp,
			repoUrl: 'https://github.com/MalachiMackie/XWindowPlayground',
			smallDescription: 'Abandoned XWindow framework used for learning XWindow',
			imageUrl: '',
			category: ProjectCategory.DesktopDev,
			description: ''
		}
	];

	const categories: {[category: ProjectCategory]: Project[]} = {};

	for (let project of projects) {
		let foundProjects = categories[project.category];
		if (!foundProjects) {
			foundProjects = [];
			categories[project.category] = foundProjects;
		}
		foundProjects.push(project);
	}

</script>

<main>
	<a href="#projects" id="skip-to-content">Skip to Content</a>
	<h1>Malachi Mackie</h1>

	<h2 id="projects">Projects</h2>

	{#each Object.keys(categories) as category}

		<h2>{GetProjectCategoryName(category)}</h2>
		<div class="project-grid">

			{#each categories[category] as project}
				<ProjectTile {project}></ProjectTile>
			{/each}
		</div>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h1::before, h1::after {
		display: block;
		content: '';
		height: 0.25em;
		width: 100%;
		background: rebeccapurple;
	}

	a#skip-to-content {
		position: absolute;
		left: 0;
		background: black;
		color: white;
		padding: 0.5em;
		transition: transform 150ms;
		transform: translateY(-200%);
	}

	a#skip-to-content:focus {
		transition: transform 150ms;
		transform: translateY(0%);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.project-grid {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(3, minmax(100px, 1fr));
	}
</style>