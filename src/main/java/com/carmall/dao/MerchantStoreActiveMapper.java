package com.carmall.dao;

import com.carmall.entity.MerchantStoreActive;
import com.carmall.entity.MerchantStoreActiveExample;
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

public interface MerchantStoreActiveMapper {
    @SelectProvider(type=MerchantStoreActiveSqlProvider.class, method="countByExample")
    int countByExample(MerchantStoreActiveExample example);

    @DeleteProvider(type=MerchantStoreActiveSqlProvider.class, method="deleteByExample")
    int deleteByExample(MerchantStoreActiveExample example);

    @Delete({
        "delete from iskyshop_store_active",
        "where id = #{id,jdbcType=BIGINT}"
    })
    int deleteByPrimaryKey(Long id);

    @Insert({
        "insert into iskyshop_store_active (id, store_id, ",
        "active_title, state, ",
        "create_time, done_time, ",
        "active_content)",
        "values (#{id,jdbcType=BIGINT}, #{storeId,jdbcType=BIGINT}, ",
        "#{activeTitle,jdbcType=VARCHAR}, #{state,jdbcType=INTEGER}, ",
        "#{createTime,jdbcType=TIMESTAMP}, #{doneTime,jdbcType=TIMESTAMP}, ",
        "#{activeContent,jdbcType=LONGVARCHAR})"
    })
    int insert(MerchantStoreActive record);

    @InsertProvider(type=MerchantStoreActiveSqlProvider.class, method="insertSelective")
    int insertSelective(MerchantStoreActive record);

    @SelectProvider(type=MerchantStoreActiveSqlProvider.class, method="selectByExampleWithBLOBs")
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="store_id", property="storeId", jdbcType=JdbcType.BIGINT),
        @Result(column="active_title", property="activeTitle", jdbcType=JdbcType.VARCHAR),
        @Result(column="state", property="state", jdbcType=JdbcType.INTEGER),
        @Result(column="create_time", property="createTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="done_time", property="doneTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="active_content", property="activeContent", jdbcType=JdbcType.LONGVARCHAR)
    })
    List<MerchantStoreActive> selectByExampleWithBLOBs(MerchantStoreActiveExample example);

    @SelectProvider(type=MerchantStoreActiveSqlProvider.class, method="selectByExample")
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="store_id", property="storeId", jdbcType=JdbcType.BIGINT),
        @Result(column="active_title", property="activeTitle", jdbcType=JdbcType.VARCHAR),
        @Result(column="state", property="state", jdbcType=JdbcType.INTEGER),
        @Result(column="create_time", property="createTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="done_time", property="doneTime", jdbcType=JdbcType.TIMESTAMP)
    })
    List<MerchantStoreActive> selectByExample(MerchantStoreActiveExample example);

    @Select({
        "select",
        "id, store_id, active_title, state, create_time, done_time, active_content",
        "from iskyshop_store_active",
        "where id = #{id,jdbcType=BIGINT}"
    })
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="store_id", property="storeId", jdbcType=JdbcType.BIGINT),
        @Result(column="active_title", property="activeTitle", jdbcType=JdbcType.VARCHAR),
        @Result(column="state", property="state", jdbcType=JdbcType.INTEGER),
        @Result(column="create_time", property="createTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="done_time", property="doneTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="active_content", property="activeContent", jdbcType=JdbcType.LONGVARCHAR)
    })
    MerchantStoreActive selectByPrimaryKey(Long id);

    @UpdateProvider(type=MerchantStoreActiveSqlProvider.class, method="updateByExampleSelective")
    int updateByExampleSelective(@Param("record") MerchantStoreActive record, @Param("example") MerchantStoreActiveExample example);

    @UpdateProvider(type=MerchantStoreActiveSqlProvider.class, method="updateByExampleWithBLOBs")
    int updateByExampleWithBLOBs(@Param("record") MerchantStoreActive record, @Param("example") MerchantStoreActiveExample example);

    @UpdateProvider(type=MerchantStoreActiveSqlProvider.class, method="updateByExample")
    int updateByExample(@Param("record") MerchantStoreActive record, @Param("example") MerchantStoreActiveExample example);

    @UpdateProvider(type=MerchantStoreActiveSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(MerchantStoreActive record);

    @Update({
        "update iskyshop_store_active",
        "set store_id = #{storeId,jdbcType=BIGINT},",
          "active_title = #{activeTitle,jdbcType=VARCHAR},",
          "state = #{state,jdbcType=INTEGER},",
          "create_time = #{createTime,jdbcType=TIMESTAMP},",
          "done_time = #{doneTime,jdbcType=TIMESTAMP},",
          "active_content = #{activeContent,jdbcType=LONGVARCHAR}",
        "where id = #{id,jdbcType=BIGINT}"
    })
    int updateByPrimaryKeyWithBLOBs(MerchantStoreActive record);

    @Update({
        "update iskyshop_store_active",
        "set store_id = #{storeId,jdbcType=BIGINT},",
          "active_title = #{activeTitle,jdbcType=VARCHAR},",
          "state = #{state,jdbcType=INTEGER},",
          "create_time = #{createTime,jdbcType=TIMESTAMP},",
          "done_time = #{doneTime,jdbcType=TIMESTAMP}",
        "where id = #{id,jdbcType=BIGINT}"
    })
    int updateByPrimaryKey(MerchantStoreActive record);
}