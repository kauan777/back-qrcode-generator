export interface UserProps {
  name: string;
  slug: string;
  description: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export class User {
  private props: UserProps;

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }
  get slug() {
    return this.props.slug;
  }

  get github() {
    return this.props.github;
  }
  get linkedin() {
    return this.props.linkedin;
  }
  get instagram() {
    return this.props.instagram;
  }

  constructor(props: UserProps) {
    this.props = props;
  }
}
