import PropTypes from 'prop-types';
import React from 'react';
import { ViewStyle } from 'react-native';
import Avatar from './Avatar';
import Bubble from './Bubble';
import SystemMessage from './SystemMessage';
import Day from './Day';
import { IMessage, User, LeftRightStyle } from './types';
interface MessageProps<TMessage extends IMessage = IMessage> {
    key: any;
    showUserAvatar?: boolean;
    position: 'left' | 'right';
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    user: User;
    inverted?: boolean;
    containerStyle?: LeftRightStyle<ViewStyle>;
    renderBubble?(props: Bubble['props']): React.ReactNode;
    renderDay?(props: Day['props']): React.ReactNode;
    renderSystemMessage?(props: SystemMessage['props']): React.ReactNode;
    renderAvatar?(props: Avatar['props']): React.ReactNode;
}
export default class Message extends React.Component<MessageProps> {
    static defaultProps: {
        renderAvatar: undefined;
        renderBubble: null;
        renderDay: null;
        renderSystemMessage: null;
        position: string;
        currentMessage: {};
        nextMessage: {};
        previousMessage: {};
        user: {};
        containerStyle: {};
        showUserAvatar: boolean;
        inverted: boolean;
    };
    static propTypes: {
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        showUserAvatar: PropTypes.Requireable<boolean>;
        renderBubble: PropTypes.Requireable<(...args: any[]) => any>;
        renderDay: PropTypes.Requireable<(...args: any[]) => any>;
        renderSystemMessage: PropTypes.Requireable<(...args: any[]) => any>;
        position: PropTypes.Requireable<string>;
        currentMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        user: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
            right: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>> | undefined;
        }>>;
    };
    shouldComponentUpdate(nextProps: MessageProps): boolean;
    renderDay(): {} | null | undefined;
    renderBubble(): {} | null | undefined;
    renderSystemMessage(): {} | null | undefined;
    renderAvatar(): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
