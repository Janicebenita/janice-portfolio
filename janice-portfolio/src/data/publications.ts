export interface Publication { status: 'Accepted' | 'Published'; title: string; journal: string; volume?: string; year: string; link?: string; doi?: string }
export const publications: Publication[] = [
  { status: 'Accepted', title: 'Design and Implementation of the Digital Quality Intelligence Platform: A Modular Decision-Support Software Framework for Engineering Quality Intelligence', journal: 'International Journal of Advanced Trends in Computer Science and Engineering', volume: 'Vol. 15, No. 4', year: '2026' },
  { status: 'Published', title: 'Explainable Deep Learning Framework for Automated Concrete Crack Detection Using ResNet-18', journal: 'International Journal of Engineering Research and Technology', year: '2026', doi: '10.5281/zenodo.20124334', link: 'https://doi.org/10.5281/zenodo.20124334' },
]
