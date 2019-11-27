export type ResolvableValue<T> = T | (() => T | Promise<T>);

export default async function resolveConfigValue<T>(value: ResolvableValue<T>): Promise<T> {
	if (typeof value === 'function') {
		return (value as Function)();
	}

	return value;
}
