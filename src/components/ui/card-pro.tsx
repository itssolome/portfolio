import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { SquareArrowOutUpRight } from "lucide-react"

interface TechProps {
	name: string
	icon?: string
}

interface CardProProps {
	link: string
	title: string
	theme: string
	description: string
	desc: string
	tech: TechProps[]
	image: string
	className?: string
}

export const CardPro = ({
	link,
	title,
	theme,
	description,
	desc,
	tech,
	image,
	className,
}: CardProProps) => {
	return (
		<div className="transition-opacity duration-200">
			<HoverCard openDelay={10} closeDelay={100}>
				<HoverCardTrigger>
					<Card className={className}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
							<CardDescription>{description}</CardDescription>
							<CardAction>
								<Button
									className={`size-4 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${theme === "dark"
											? "text-gray-400 hover:text-white"
											: "text-gray-500 hover:text-slate-950"
										} `}
								>
									<Link to={link} target="_blank">
										<SquareArrowOutUpRight />
									</Link>
								</Button>
							</CardAction>
						</CardHeader>
					</Card>
				</HoverCardTrigger>
				<HoverCardContent className="flex w-64 flex-col gap-0.5" side="right">
					<img src={image} alt={title} />
					<div>
						<h1 className="font-semibold">{title}</h1>
					</div>
					<div>
						<p>{desc}</p>
					</div>
					<div className="mt-1 text-xs text-muted-foreground">
						<ul>
							{Array.isArray(tech) ? (
								tech.map((t) => <li key={t.name}>{t.name}</li>)
							) : (
								<li>{tech}</li>
							)}
						</ul>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	)
}
