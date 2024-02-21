import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineRead,
  AiOutlineTwitter,
  AiOutlineUnorderedList,
  AiFillLinkedin,
} from "react-icons/ai"
import styled from "@emotion/styled"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.twitter && (
          <a
            href={`https://twitter.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter className="icon" />
            <div className="name">twitter</div>
          </a>
        )}
        {CONFIG.profile.ao3 && (
          <a
            href={`https://archiveofourown.org/users/${CONFIG.profile.ao3}/profile`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineRead className="icon" />
            <div className="name">ao3</div>
          </a>
        )}
        {CONFIG.profile.mal && (
          <a
            href={`https://myanimelist.net/profile/${CONFIG.profile.mal}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineUnorderedList className="icon" />
            <div className="name">myanimelist</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
