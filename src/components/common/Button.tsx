import React from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  $variant?: 'primary' | 'outline';
  $size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small': return '8px 16px';
      case 'large': return '14px 28px';
      default: return '12px 24px';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small': return '14px';
      case 'large': return '16px';
      default: return '15px';
    }
  }};
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ $variant, theme }) => {
    if ($variant === 'outline') {
      return `
        background: transparent;
        border: 1.5px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        
        &:hover {
          background: ${theme.colors.primary};
          color: white;
        }
      `;
    }
    return `
      background: ${theme.colors.primary};
      color: white;
      border: none;
      
      &:hover {
        background: #1E6FE8;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(49, 130, 246, 0.3);
      }
    `;
  }}
`;

const StyledLink = styled.a<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small': return '8px 16px';
      case 'large': return '14px 28px';
      default: return '12px 24px';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small': return '14px';
      case 'large': return '16px';
      default: return '15px';
    }
  }};
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  ${({ $variant, theme }) => {
    if ($variant === 'outline') {
      return `
        background: transparent;
        border: 1.5px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        
        &:hover {
          background: ${theme.colors.primary};
          color: white;
        }
      `;
    }
    return `
      background: ${theme.colors.primary};
      color: white;
      border: none;
      
      &:hover {
        background: #1E6FE8;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(49, 130, 246, 0.3);
      }
    `;
  }}
`;

// ▼ [수정됨] 표준 버튼 속성(onClick 등)을 모두 상속받도록 변경
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {
  children: React.ReactNode;
}

// ▼ [수정됨] 표준 a 태그 속성(onClick, href, target 등)을 모두 상속받도록 변경
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, BaseButtonProps {
  children: React.ReactNode;
  as?: any; // Link 컴포넌트로 변환될 때를 대비해 추가
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  ...props 
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  children, 
  ...props // href, target, onClick 등이 여기로 다 들어옵니다
}) => {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};