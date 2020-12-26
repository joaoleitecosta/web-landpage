import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter, FaLinkedin } from 'react-icons/fa'

import * as S from './styles'
import { AuthorProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />,
  Linkedln: <FaLinkedin />
}

const ProfileCard: React.FC<AuthorProps> = ({
  id,
  name,
  role,
  photo,
  socialLink,
  description
}) => (
  <S.Card key={id}>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />

    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLink.map((item) => (
        <S.Link key={item.id}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
