import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { IMessage } from './types';
interface DayProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    containerStyle?: ViewStyle;
    wrapperStyle?: ViewStyle;
    textStyle?: TextStyle;
    dateFormat?: string;
    inverted?: boolean;
}
export default class Day extends PureComponent<DayProps> {
    static contextTypes: {
        getLocale: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        currentMessage: {
            createdAt: null;
        };
        previousMessage: {};
        nextMessage: {};
        containerStyle: {};
        wrapperStyle: {};
        textStyle: {};
        dateFormat: string;
    };
    static propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        wrapperStyle: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        textStyle: PropTypes.Requireable<any>;
        dateFormat: PropTypes.Requireable<string>;
    };
    render(): JSX.Element | null;
}
export {};
