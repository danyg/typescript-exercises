type TransformStringFunction = (value: string) => string;

declare module 'str-utils' {
	// export const ...
	// export function ...

	export const strReverse: TransformStringFunction;
	export const strToLower: TransformStringFunction;
	export const strToUpper: TransformStringFunction;
	export const strRandomize: TransformStringFunction;
	export const strInvertCase: TransformStringFunction;
}
