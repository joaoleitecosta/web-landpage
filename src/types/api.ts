export type LogoProps = {
  alternativeText: string
  url: string
}

type ButtonProps = {
  label: string
  url: string
}

type ConceptProps = {
  id: number
  title: string
}

type ModulesProps = {
  id: number
  title: string
  subtitle: string
  description: string
}

type SocialLinkProps = {
  id: number
  title: string
  url: string
}

type QuestionProps = {
  id: number
  answer: string
  question: string
}

export type AuthorProps = {
  id: number
  photo: LogoProps
  name: string
  role: string
  description: string
  socialLink: SocialLinkProps[]
}

export type ReviewsProps = {
  id: number
  name: string
  text: string
  photo: LogoProps
}

export type HeaderProps = {
  title: string
  description: string
  button?: ButtonProps
  image: LogoProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}

export type TechIconsProps = {
  id: number
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptProps[]
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type SectionFaqProps = {
  questions: QuestionProps[]
}

export type LandingPagePros = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
