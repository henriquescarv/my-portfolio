import React from 'react';
import ProjectsCard from '../components/ProjectsCard/ProjectsCard';
import projects from '../../../../data/projetcs';
import { Locales } from '../../../../locales/locales.br';
import HorizontalArrow from '../../../../icons/HorizontalArrow/HorizontalArrow';
import { ButtonProps } from '../../../../components/ui/Button/Button.types';
import Section from '../components/Section/Section';

const ProjectsSection = () => {
	const projectsLocale = Locales.home.projectsSection;

	const seeMoreButton = () => {
		const seeMoreButtonLabel = (
			<>
				{projectsLocale.seeMoreButton}
				<HorizontalArrow />
			</>
		);

		const handleClick = () => {}; // leva para a página de projetos

		return {
			type: 'text',
			label: seeMoreButtonLabel,
			onClick: handleClick,
		};
	};

	const mountContent = () => {
		const defaultButtonProps = (buttonUrl: string, type?: 'primary' | 'secondary' | 'text') => ({
			type,
			label: projectsLocale.seeProjectButton,
			onClick: () => window.open(buttonUrl),
		});

		return (
			<>
				{projects.map(project => (
					<ProjectsCard
						title={project.title}
						key={project.title}
						imageUrl={project.imageUrl}
						imageAlt={project.imageAlt}
						description={project.description}
						button={defaultButtonProps(project.projectUrl)}
					/>
				))}
			</>
		);
	};

	return (
		<Section
			title= {projectsLocale.title}
			sectionId= {'projects'}
			content= {mountContent()}
			rightButton= {seeMoreButton() as ButtonProps}
		/>
	);
};

export default ProjectsSection;