import Button from "@rescui/button";
import {cardCn} from "@rescui/card";
import {useTextStyles} from "@rescui/typography";
import {ThemeProvider} from "@rescui/ui-contexts";
import cn from "classnames";
import {useEffect, useState} from "react";
import {Container, Section} from "../layout";
import {testimonials} from "./testimonials";



function UsageContent() {
	const textCn = useTextStyles();
	const [sortByName, setSortByName] = useState(false);
	useEffect(() => {
		const saved = localStorage.getItem("kotlin-testimonials-order");
		if (saved === "name") setSortByName(true);
	}, []);
	const sortedTestimonials = sortByName
		? [...testimonials].sort((a, b) => a.company.localeCompare(b.company))
		: testimonials;
	
	return (
		<Section className="usage-section">
			<Container>
				<h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>
				<div className="kto-offset-top-16" style={{ display: "flex", justifyContent: "flex-end" }}>
					<Button
						mode="outline"
						size="s"
						onClick={() => {
							const next = !sortByName;
							setSortByName(next);
							localStorage.setItem("kotlin-testimonials-order", next ? "name" : "default");
						}}
					>
						Sort: {sortByName ? "A-Z" : "Default"}
					</Button>
				</div>
				<div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
					{sortedTestimonials.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								cardCn({ theme: "light", mode: "classic", isClickable: true }),
								"usage-section__card",
								"kto-col-4 kto-col-md-6 kto-col-sm-12"
							)}
						>
							<img
								src={item.logo}
								alt={item.company}
								className={cn(
									"usage-section__logo",
									item.company === "Spring" && "usage-section__logo_spring"
								)}
							/>
							<p className={cn(textCn("rs-text-2"), "kto-offset-top-8")}>{item.text}</p>
						</a>
					))}
				</div>
			</Container>
		</Section>
	);
}

function UsageSection() {
	return (
		<ThemeProvider theme={"light"}>
			<UsageContent />
		</ThemeProvider>
	)
}

export default UsageSection;