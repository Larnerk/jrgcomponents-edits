'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { Box, SxProps, Typography, useTheme } from '@mui/material';
import HeaderFooter, { HeaderFooterProps } from './HeaderFooter';
import PopoutDrawer from './Drawer';
import PopoutButton from './Button';

type Menu = {
  heading?: string;
  icon?: ReactNode;
  swr: any;
  menu: any;
  width: string;
};
export type AppWrapperProps = {
  header?: HeaderFooterProps;
  footer?: HeaderFooterProps;
  inner?: boolean;
  mainSX?: SxProps;
};

export default function AppWrapper({
  header,
  footer,
  inner = true,
  mainSX = {},
  children,
}: AppWrapperProps & { children: ReactNode }) {
  const [open, setOpen] = useState({ left: false, right: false });
  const theme = useTheme();
  useEffect(() => {
    console.log('Open State of popout changed: ', open);
  }, [open]);
  return (
    <>
      <HeaderFooter
        height={header?.height}
        components={
          header?.components && {
            left: (header?.components?.left as unknown as Menu)?.heading ? (
              <PopoutButton
                open={open.left}
                handleToggle={() => {
                  setOpen((previousState: any) => ({ ...previousState, left: !previousState.left }));
                }}
                side='left'
                heading={(header?.components?.left as unknown as Menu)?.heading ?? ''}
                icon={(header?.components?.left as unknown as Menu)?.icon ?? null}
              />
            ) : (
              (header?.components?.left as ReactNode)
            ),
            center: header?.components?.center ? (
              typeof header?.components?.center === 'string' ? (
                <Typography variant='h6' component={inner ? 'h2' : 'h1'} textAlign='center' noWrap>
                  {header?.components?.center}
                </Typography>
              ) : (
                <Box display='flex' justifyContent='space-between' alignItems='center' height='100%'>
                  {header?.components?.center}
                </Box>
              )
            ) : undefined,
            right:
              (header?.components?.right as unknown as Menu)?.heading !== undefined ? (
                <PopoutButton
                  open={open.right}
                  handleToggle={() => {
                    setOpen((previousState: any) => ({ ...previousState, right: !previousState.right }));
                  }}
                  side='right'
                  heading={(header?.components?.right as unknown as Menu)?.heading ?? ''}
                  icon={(header?.components?.right as unknown as Menu)?.icon}
                />
              ) : (
                (header?.components?.right as ReactNode)
              ),
          }
        }
      />
      {(header?.components?.left as unknown as Menu)?.menu && (
        <PopoutDrawer
          open={open.left}
          {...(header?.components?.left as unknown as Menu)}
          side='left'
          zIndex={1200}
          topSpacing={header?.height}
          bottomSpacing={footer?.height ?? '0'}
        />
      )}
      <Box
        component={inner ? 'main' : 'div'}
        sx={{
          flexGrow: 1,
          flexShrink: '0',
          position: 'relative',
          overflowY: 'auto',
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing[open.left || open.right ? 'easeOut' : 'sharp'],
            duration: theme.transitions.duration[open.left || open.right ? 'enteringScreen' : 'leavingScreen'],
          }),
          margin: `0 ${open.right ? (header?.components?.right as unknown as Menu)?.width : 0} 0 ${open.left ? (header?.components?.left as unknown as Menu)?.width : 0}`,
          ...mainSX,
        }}
      >
        {children}
      </Box>
      {(header?.components?.right as unknown as Menu)?.menu && (
        <PopoutDrawer
          open={open.right}
          {...(header?.components?.right as unknown as Menu)}
          side='right'
          zIndex={1200}
          topSpacing={header?.height}
          bottomSpacing={footer?.height ?? '0'}
        />
      )}
      {footer && <HeaderFooter components={footer.components} height={footer.height} footer />}
    </>
  );
}
