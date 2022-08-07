import { Button, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as yup from 'yup';
import React, { FormEvent, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import AlertFixed, { AlertType } from '../../../components/AlertFixed';
import Loading from '../../../components/Loading';
import useAuth from '../../../hooks/useAuth';
import { createComment } from '../../../services/api';
import { boxForm, container, containerButton } from '../styles';
import { commentSchema } from '../../../utils/validations';

type CommentType = {
  productId: string,
  children: ReactNode,
  getAProduct: () => Promise<void>
}

const Comment = ({ productId, children, getAProduct }: CommentType) => {

  const navigate = useNavigate();
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [openLoading, setOpenLoading] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    isOpen: false,
    message: '',
    severity: 'error'
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!user?.name) return;
    setOpenLoading(true);
    try {
      await commentSchema.validate({ text: text });
      await createComment({ comment: text, username: user.name, productId: productId });
      await getAProduct();
      setText('');
    } catch (error) {

      if (error instanceof yup.ValidationError) {
        setAlert({ isOpen: true, message: error.message, severity: 'error' })
      }
    } finally {
      setOpenLoading(false);
      setTimeout(() => {
        setAlert((e) => ({ ...e, isOpen: false }));
      }, 1500);
    }

  }

  return (
    <Box component="div" sx={container}>

      <AlertFixed
        severity={alert.severity}
        message={alert.message}
        isOpen={alert.isOpen}
        setOpen={setAlert}
      />

      <Loading isOpen={openLoading} />
      <Box component='form' onSubmit={handleSubmit} sx={boxForm}>
        <TextareaAutosize
          aria-label="textarea"
          minRows={5}
          placeholder="Escrevar um comentário"
          value={text}
          required
          onChange={({ target: { value } }) => setText(value)}
        />
        <Box component='div' sx={containerButton} marginTop={2}>
          {user ? (
            <Button variant='contained' color="secondary" type='submit' onClick={handleSubmit}>
              Adicionar
            </Button>
          ) : (
            <Alert onClickButtonAlert={() => navigate('/login')} />
          )}

        </Box>
      </Box>
      <Typography
        component="h6"
        variant="h6"
        color="primary"
        marginTop={2}
      >
        Comentários
      </Typography>

      {children}

    </Box>

  );
}

export default Comment;