package com.carmall.dao;

import com.carmall.entity.AuthValidateVo;
import com.carmall.entity.AuthValidateVoExample;
import java.util.List;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.DeleteProvider;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.InsertProvider;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.UpdateProvider;
import org.apache.ibatis.type.JdbcType;

public interface AuthValidateVoMapper {
    @SelectProvider(type=AuthValidateVoSqlProvider.class, method="countByExample")
    int countByExample(AuthValidateVoExample example);

    @DeleteProvider(type=AuthValidateVoSqlProvider.class, method="deleteByExample")
    int deleteByExample(AuthValidateVoExample example);

    @Delete({
        "delete from t_auth_validate",
        "where id = #{id,jdbcType=BIGINT}"
    })
    int deleteByPrimaryKey(Long id);

    @Insert({
        "insert into t_auth_validate (id, type, ",
        "code, destination, ",
        "userid, source, addtime)",
        "values (#{id,jdbcType=BIGINT}, #{type,jdbcType=TINYINT}, ",
        "#{code,jdbcType=VARCHAR}, #{destination,jdbcType=VARCHAR}, ",
        "#{userid,jdbcType=BIGINT}, #{source,jdbcType=VARCHAR}, #{addtime,jdbcType=TIMESTAMP})"
    })
    int insert(AuthValidateVo record);

    @InsertProvider(type=AuthValidateVoSqlProvider.class, method="insertSelective")
    int insertSelective(AuthValidateVo record);

    @SelectProvider(type=AuthValidateVoSqlProvider.class, method="selectByExample")
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="type", property="type", jdbcType=JdbcType.TINYINT),
        @Result(column="code", property="code", jdbcType=JdbcType.VARCHAR),
        @Result(column="destination", property="destination", jdbcType=JdbcType.VARCHAR),
        @Result(column="userid", property="userid", jdbcType=JdbcType.BIGINT),
        @Result(column="source", property="source", jdbcType=JdbcType.VARCHAR),
        @Result(column="addtime", property="addtime", jdbcType=JdbcType.TIMESTAMP)
    })
    List<AuthValidateVo> selectByExample(AuthValidateVoExample example);

    @Select({
        "select",
        "id, type, code, destination, userid, source, addtime",
        "from t_auth_validate",
        "where id = #{id,jdbcType=BIGINT}"
    })
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="type", property="type", jdbcType=JdbcType.TINYINT),
        @Result(column="code", property="code", jdbcType=JdbcType.VARCHAR),
        @Result(column="destination", property="destination", jdbcType=JdbcType.VARCHAR),
        @Result(column="userid", property="userid", jdbcType=JdbcType.BIGINT),
        @Result(column="source", property="source", jdbcType=JdbcType.VARCHAR),
        @Result(column="addtime", property="addtime", jdbcType=JdbcType.TIMESTAMP)
    })
    AuthValidateVo selectByPrimaryKey(Long id);

    @UpdateProvider(type=AuthValidateVoSqlProvider.class, method="updateByExampleSelective")
    int updateByExampleSelective(@Param("record") AuthValidateVo record, @Param("example") AuthValidateVoExample example);

    @UpdateProvider(type=AuthValidateVoSqlProvider.class, method="updateByExample")
    int updateByExample(@Param("record") AuthValidateVo record, @Param("example") AuthValidateVoExample example);

    @UpdateProvider(type=AuthValidateVoSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(AuthValidateVo record);

    @Update({
        "update t_auth_validate",
        "set type = #{type,jdbcType=TINYINT},",
          "code = #{code,jdbcType=VARCHAR},",
          "destination = #{destination,jdbcType=VARCHAR},",
          "userid = #{userid,jdbcType=BIGINT},",
          "source = #{source,jdbcType=VARCHAR},",
          "addtime = #{addtime,jdbcType=TIMESTAMP}",
        "where id = #{id,jdbcType=BIGINT}"
    })
    int updateByPrimaryKey(AuthValidateVo record);
}