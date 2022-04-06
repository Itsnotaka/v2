/* eslint-disable no-undef */
export default abstract class Writing {
	public abstract readonly name: string;
	public abstract readonly slug: string;
	public abstract readonly date: Date;
	public abstract readonly hidden: boolean;
	public abstract readonly excerpt: string;
	public abstract readonly keywords: string[];
	public abstract render(): JSX.Element;
}
