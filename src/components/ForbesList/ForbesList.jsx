import { ForbesListItem } from 'components';
import {
	BoardHeader,
	LeaderBoard,
	BoardTitle,
	TitleTop,
	TitleBottom,
	LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ friends }) => {
	return (
		<LeaderBoard>
			<BoardHeader>
				<BoardTitle>
					<TitleTop>Forbes</TitleTop>
					<TitleBottom>Leader board</TitleBottom>
				</BoardTitle>
			</BoardHeader>

			<LeaderBoardProfiles>
				{friends.map((item) => (
					<ForbesListItem
						key={item.id}
						avatar={item.avatar}
						name={item.name}
						capital={item.capital}
						isIncrease={item.isIncrease}
					/>
				))}
			</LeaderBoardProfiles>
		</LeaderBoard>
	);
};
