import Button from "@rescui/button";
import {useTextStyles} from "@rescui/typography";
import {ThemeProvider} from "@rescui/ui-contexts";
import cn from "classnames";
import {Container, Section} from "../layout";
import ProgrammingLanguage from "./ProgrammingLanguages";
import {reasons} from "./reasons";




function WhyKotlinContent() {
	const textCn = useTextStyles();
	return (
		<Section className="why-kotlin-section" id="why-kotlin">
			<Container>
				<h2 className={textCn("rs-hero")}>Why Kotlin</h2>
				<ProgrammingLanguage />
				{reasons.map((section, index) => (
					<div
						key={index}
						className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
					>
						<div className="kto-col-4 kto-col-md-12">
							<h3 className={textCn("rs-h2")}>{section.title}</h3>
							<p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
								{section.description.split("\n\n").map((para, i) => (
									<span key={i}>
                    {para}
										{i < section.description.split("\n\n").length - 1 && (
											<>
												<br />
												<br />
											</>
										)}
                  </span>
								))}
							</p>
							<div className="kto-offset-top-32">
								<Button mode="outline" size="l" href={section.buttonLink}>
									{section.buttonText}
								</Button>
							</div>
						</div>
						<div className="kto-col-8 kto-col-md-12">
							{section.media === "youtube" && (
								<div className="why-kotlin-section__youtube">
									<iframe
										width={560}
										height={315}
										frameBorder={0}
										allowFullScreen
										title="YouTube"
										src={`https://www.youtube-nocookie.com/embed/${section.youtubeId}`}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
								</div>
							)}
							{section.media === "image" && (
								<img
									src="/assets/images/index/multiplatform.svg"
									alt="Kotlin Multiplatform"
									className="why-kotlin-section__image"
								/>
							)}
						</div>
					</div>
				))}
			</Container>
		</Section>
	);
}


function WhyKotlinSection() {
	return (
		<ThemeProvider theme={"light"}>
			<WhyKotlinContent />
		</ThemeProvider>
	)
}

export default WhyKotlinSection;