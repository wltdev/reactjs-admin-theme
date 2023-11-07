import React from 'react';

interface Props {
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
}
// children: React.ReactNode

export const CombineComponents = ({ components }: Props) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            // eslint-disable-next-line react/display-name
            return ({ children }: React.PropsWithChildren) => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                );
            };
        },
        ({ children }) => <>{children}</>
    );
};
