import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import {dateToShow} from '../Utils/DateFormater.js'

export const BlogCard = ( {poster, tag, title, description, userName, avatar, postedAt} ) => {
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={title}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
        <Date>{dateToShow(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>;
};
