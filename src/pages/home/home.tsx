import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardPro } from "@/components/ui/card-pro"
import { HoverLinkCon } from "@/components/ui/hover-link-con"
import { HoverLinkExp } from "@/components/ui/hover-link-exp"
import { HoverLinkSer } from "@/components/ui/hover-link-ser"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

interface HomeProps {
	theme: string
}

export const Home = ({ theme }: HomeProps) => {
	return (
		<main className="flex flex-col gap-14 pb-10 sm:gap-16 sm:pb-16">
			<section className="flex flex-col gap-8 sm:gap-12">
				<Avatar className="size-24 sm:size-28">
					<AvatarImage src="/img/logo.jpg" alt="@itssolome" />
					<AvatarFallback>itssolome</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-2">
					<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<h1 className="text-sm font-semibold">Brayan Ocampo Lopez</h1>
								</TooltipTrigger>
								<TooltipContent>
									<p>itssolome</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Technologist in web software analysis and development.
						</p>
					</div>
					<p className="text-sm leading-relaxed text-muted-foreground">
						I&apos;m a software analyst and developer with a strong passion for
						web UI. I have 3+ years of experience building websites using modern
						JavaScript frameworks like React and Next.js. I love turning designs
						into clean, functional interfaces.
					</p>
					<p className="text-sm leading-relaxed text-muted-foreground">
						I&apos;m a minimalist by nature, a creative problem-solver, and a
						confident leader who enjoys tackling challenges with imagination and
						structure. I thrive in team environments, love collaborating on
						large-scale projects, sharing ideas, and learning from others.
					</p>
					<p className="text-sm leading-relaxed text-muted-foreground">
						Outside of code, I&apos;m into anime, traditional Japanese
						aesthetics, and Linux, all of which influence my taste for
						simplicity, detail, and well-crafted systems.
					</p>
				</div>
			</section>

			<section>
				<h2 className="mb-2 font-semibold">Projects</h2>
				<div className="grid grid-cols-1 gap-3 py-1.5 sm:grid-cols-2 sm:px-3">
					<CardPro
						title="Toki Pomito"
						description="Minimal Pomodoro timer."
						link="https://tokipomito.vercel.app/"
						theme={theme}
						desc="A clean and minimal Pomodoro timer to help you stay focused."
						tech={[
							{ name: "React" },
							{ name: "TailwindCSS" },
							{ name: "Vite" },
						]}
						image={
							theme === "dark"
								? "https://tokipomito.vercel.app/opengraph-image-l.png"
								: "https://tokipomito.vercel.app/opengraph-image-d.png"
						}
					/>
					<CardPro
						title="Toki List"
						description="Minimal todo list app."
						link="https://tokilist.vercel.app/"
						theme={theme}
						desc="A minimal todo list app to help you stay organized and productive."
						tech={[
							{ name: "React" },
							{ name: "TailwindCSS" },
							{ name: "Vite" },
						]}
						image={
							theme === "dark"
								? "https://tokilist.vercel.app/opengraph-image-l.png"
								: "https://tokilist.vercel.app/opengraph-image-d.png"
						}
					/>
					<CardPro
						title="Toki Notes"
						description="Minimal notes app."
						link="https://tokinotes.vercel.app/"
						theme={theme}
						desc="A minimal notes app to help you capture and organize your thoughts."
						tech={[
							{ name: "React" },
							{ name: "TailwindCSS" },
							{ name: "Vite" },
						]}
						image={
							theme === "dark"
								? "https://tokinotes.vercel.app/opengraph-image-l.png"
								: "https://tokinotes.vercel.app/opengraph-image-d.png"
						}
					/>
				</div>
			</section>

			<section>
				<h2 className="mb-2 font-semibold">Experience</h2>
				<HoverLinkExp
					title="AndesBPO"
					description="Web Full Stack developer (React.js and Python FastAPI)"
					theme={theme}
					paragraph1="I worked as a Full Stack web developer, building interfaces and software solutions for different companies in the BPO sector. On the front-end side, I used modern JavaScript frameworks like ReactJS and Next.js to create dynamic, optimized, and user-focused interfaces. I also worked with Chakra UI as a React component library to keep visual consistency and speed up development, and used TailwindCSS to build responsive, scalable, and high-performance designs."
					paragraph2="On the back-end side, I used Python as my main programming language and built robust, consumable APIs with FastAPI, focusing on clean architecture, performance, and easy integration with other services. I also implemented audio summarization services for both long and short recordings using artificial intelligence models from OpenAI and DeepSeek, helping automate information processing and text generation."
					paragraph3="Throughout my projects, I followed good version control practices using Git, with GitHub as the main platform for hosting and collaboration. I also used GitHub Copilot to assist with parts of the development and improve productivity. Additionally, I worked with Docker to containerize applications, making deployments more consistent, portable, and efficient across environments."
				/>
			</section>

			<section>
				<h2 className="mb-2 font-semibold">Services</h2>
				<HoverLinkSer
					link="mailto:contact.ocampo.info@gmail.com"
					title="Custom Website Development"
					theme={theme}
				/>
				<HoverLinkSer
					link="mailto:contact.ocampo.info@gmail.com"
					title="User Experience & Interface Design"
					theme={theme}
				/>
				<HoverLinkSer
					link="mailto:contact.ocampo.info@gmail.com"
					title="Web Applications (Full Stack)"
					theme={theme}
				/>
				<HoverLinkSer
					link="mailto:contact.ocampo.info@gmail.com"
					title="Front-End Development"
					theme={theme}
				/>
				<HoverLinkSer
					link="mailto:contact.ocampo.info@gmail.com"
					title="Back-End Development"
					theme={theme}
				/>
			</section>

			<section>
				<div className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
					<h2 className="font-semibold">Contact</h2>
					<p className="text-sm text-muted-foreground">
						- Get in touch with me!
					</p>
				</div>
				<HoverLinkCon
					link="mailto:contact.ocampo.info@gmail.com"
					title="E-mail"
					theme={theme}
					target="_blank"
				/>
				<HoverLinkCon
					link="https://linkedin.com/in/brayan-ocampo-lopez"
					title="LinkedIn"
					theme={theme}
					target="_blank"
				/>
				<HoverLinkCon
					link="https://instagram.com/its_solome"
					title="Instagram"
					theme={theme}
					target="_blank"
				/>
			</section>
		</main>
	)
}
