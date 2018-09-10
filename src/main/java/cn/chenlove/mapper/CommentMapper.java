package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.Comment;
import cn.chenlove.util.MyMapper;

public interface CommentMapper extends MyMapper<Comment> {

	List<Comment> getAllComment(Comment comment);

	Comment getComment(String id);

	List<Comment> getnearbycomment();
	
	
}