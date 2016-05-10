package com.carmall.dao;

import static org.apache.ibatis.jdbc.SqlBuilder.BEGIN;
import static org.apache.ibatis.jdbc.SqlBuilder.DELETE_FROM;
import static org.apache.ibatis.jdbc.SqlBuilder.FROM;
import static org.apache.ibatis.jdbc.SqlBuilder.INSERT_INTO;
import static org.apache.ibatis.jdbc.SqlBuilder.ORDER_BY;
import static org.apache.ibatis.jdbc.SqlBuilder.SELECT;
import static org.apache.ibatis.jdbc.SqlBuilder.SELECT_DISTINCT;
import static org.apache.ibatis.jdbc.SqlBuilder.SET;
import static org.apache.ibatis.jdbc.SqlBuilder.SQL;
import static org.apache.ibatis.jdbc.SqlBuilder.UPDATE;
import static org.apache.ibatis.jdbc.SqlBuilder.VALUES;
import static org.apache.ibatis.jdbc.SqlBuilder.WHERE;

import com.carmall.entity.AuthValidateLogVo;
import com.carmall.entity.AuthValidateLogVoExample.Criteria;
import com.carmall.entity.AuthValidateLogVoExample.Criterion;
import com.carmall.entity.AuthValidateLogVoExample;
import java.util.List;
import java.util.Map;

public class AuthValidateLogVoSqlProvider {

    public String countByExample(AuthValidateLogVoExample example) {
        BEGIN();
        SELECT("count (*)");
        FROM("t_auth_validate_log");
        applyWhere(example, false);
        return SQL();
    }

    public String deleteByExample(AuthValidateLogVoExample example) {
        BEGIN();
        DELETE_FROM("t_auth_validate_log");
        applyWhere(example, false);
        return SQL();
    }

    public String insertSelective(AuthValidateLogVo record) {
        BEGIN();
        INSERT_INTO("t_auth_validate_log");
        
        if (record.getId() != null) {
            VALUES("id", "#{id,jdbcType=BIGINT}");
        }
        
        if (record.getType() != null) {
            VALUES("type", "#{type,jdbcType=TINYINT}");
        }
        
        if (record.getCode() != null) {
            VALUES("code", "#{code,jdbcType=VARCHAR}");
        }
        
        if (record.getDestination() != null) {
            VALUES("destination", "#{destination,jdbcType=VARCHAR}");
        }
        
        if (record.getUserid() != null) {
            VALUES("userid", "#{userid,jdbcType=BIGINT}");
        }
        
        if (record.getSource() != null) {
            VALUES("source", "#{source,jdbcType=VARCHAR}");
        }
        
        if (record.getAddtime() != null) {
            VALUES("addtime", "#{addtime,jdbcType=TIMESTAMP}");
        }
        
        return SQL();
    }

    public String selectByExample(AuthValidateLogVoExample example) {
        BEGIN();
        if (example != null && example.isDistinct()) {
            SELECT_DISTINCT("id");
        } else {
            SELECT("id");
        }
        SELECT("type");
        SELECT("code");
        SELECT("destination");
        SELECT("userid");
        SELECT("source");
        SELECT("addtime");
        FROM("t_auth_validate_log");
        applyWhere(example, false);
        
        if (example != null && example.getOrderByClause() != null) {
            ORDER_BY(example.getOrderByClause());
        }
        
        return SQL();
    }

    public String updateByExampleSelective(Map<String, Object> parameter) {
        AuthValidateLogVo record = (AuthValidateLogVo) parameter.get("record");
        AuthValidateLogVoExample example = (AuthValidateLogVoExample) parameter.get("example");
        
        BEGIN();
        UPDATE("t_auth_validate_log");
        
        if (record.getId() != null) {
            SET("id = #{record.id,jdbcType=BIGINT}");
        }
        
        if (record.getType() != null) {
            SET("type = #{record.type,jdbcType=TINYINT}");
        }
        
        if (record.getCode() != null) {
            SET("code = #{record.code,jdbcType=VARCHAR}");
        }
        
        if (record.getDestination() != null) {
            SET("destination = #{record.destination,jdbcType=VARCHAR}");
        }
        
        if (record.getUserid() != null) {
            SET("userid = #{record.userid,jdbcType=BIGINT}");
        }
        
        if (record.getSource() != null) {
            SET("source = #{record.source,jdbcType=VARCHAR}");
        }
        
        if (record.getAddtime() != null) {
            SET("addtime = #{record.addtime,jdbcType=TIMESTAMP}");
        }
        
        applyWhere(example, true);
        return SQL();
    }

    public String updateByExample(Map<String, Object> parameter) {
        BEGIN();
        UPDATE("t_auth_validate_log");
        
        SET("id = #{record.id,jdbcType=BIGINT}");
        SET("type = #{record.type,jdbcType=TINYINT}");
        SET("code = #{record.code,jdbcType=VARCHAR}");
        SET("destination = #{record.destination,jdbcType=VARCHAR}");
        SET("userid = #{record.userid,jdbcType=BIGINT}");
        SET("source = #{record.source,jdbcType=VARCHAR}");
        SET("addtime = #{record.addtime,jdbcType=TIMESTAMP}");
        
        AuthValidateLogVoExample example = (AuthValidateLogVoExample) parameter.get("example");
        applyWhere(example, true);
        return SQL();
    }

    public String updateByPrimaryKeySelective(AuthValidateLogVo record) {
        BEGIN();
        UPDATE("t_auth_validate_log");
        
        if (record.getType() != null) {
            SET("type = #{type,jdbcType=TINYINT}");
        }
        
        if (record.getCode() != null) {
            SET("code = #{code,jdbcType=VARCHAR}");
        }
        
        if (record.getDestination() != null) {
            SET("destination = #{destination,jdbcType=VARCHAR}");
        }
        
        if (record.getUserid() != null) {
            SET("userid = #{userid,jdbcType=BIGINT}");
        }
        
        if (record.getSource() != null) {
            SET("source = #{source,jdbcType=VARCHAR}");
        }
        
        if (record.getAddtime() != null) {
            SET("addtime = #{addtime,jdbcType=TIMESTAMP}");
        }
        
        WHERE("id = #{id,jdbcType=BIGINT}");
        
        return SQL();
    }

    protected void applyWhere(AuthValidateLogVoExample example, boolean includeExamplePhrase) {
        if (example == null) {
            return;
        }
        
        String parmPhrase1;
        String parmPhrase1_th;
        String parmPhrase2;
        String parmPhrase2_th;
        String parmPhrase3;
        String parmPhrase3_th;
        if (includeExamplePhrase) {
            parmPhrase1 = "%s #{example.oredCriteria[%d].allCriteria[%d].value}";
            parmPhrase1_th = "%s #{example.oredCriteria[%d].allCriteria[%d].value,typeHandler=%s}";
            parmPhrase2 = "%s #{example.oredCriteria[%d].allCriteria[%d].value} and #{example.oredCriteria[%d].criteria[%d].secondValue}";
            parmPhrase2_th = "%s #{example.oredCriteria[%d].allCriteria[%d].value,typeHandler=%s} and #{example.oredCriteria[%d].criteria[%d].secondValue,typeHandler=%s}";
            parmPhrase3 = "#{example.oredCriteria[%d].allCriteria[%d].value[%d]}";
            parmPhrase3_th = "#{example.oredCriteria[%d].allCriteria[%d].value[%d],typeHandler=%s}";
        } else {
            parmPhrase1 = "%s #{oredCriteria[%d].allCriteria[%d].value}";
            parmPhrase1_th = "%s #{oredCriteria[%d].allCriteria[%d].value,typeHandler=%s}";
            parmPhrase2 = "%s #{oredCriteria[%d].allCriteria[%d].value} and #{oredCriteria[%d].criteria[%d].secondValue}";
            parmPhrase2_th = "%s #{oredCriteria[%d].allCriteria[%d].value,typeHandler=%s} and #{oredCriteria[%d].criteria[%d].secondValue,typeHandler=%s}";
            parmPhrase3 = "#{oredCriteria[%d].allCriteria[%d].value[%d]}";
            parmPhrase3_th = "#{oredCriteria[%d].allCriteria[%d].value[%d],typeHandler=%s}";
        }
        
        StringBuilder sb = new StringBuilder();
        List<Criteria> oredCriteria = example.getOredCriteria();
        boolean firstCriteria = true;
        for (int i = 0; i < oredCriteria.size(); i++) {
            Criteria criteria = oredCriteria.get(i);
            if (criteria.isValid()) {
                if (firstCriteria) {
                    firstCriteria = false;
                } else {
                    sb.append(" or ");
                }
                
                sb.append('(');
                List<Criterion> criterions = criteria.getAllCriteria();
                boolean firstCriterion = true;
                for (int j = 0; j < criterions.size(); j++) {
                    Criterion criterion = criterions.get(j);
                    if (firstCriterion) {
                        firstCriterion = false;
                    } else {
                        sb.append(" and ");
                    }
                    
                    if (criterion.isNoValue()) {
                        sb.append(criterion.getCondition());
                    } else if (criterion.isSingleValue()) {
                        if (criterion.getTypeHandler() == null) {
                            sb.append(String.format(parmPhrase1, criterion.getCondition(), i, j));
                        } else {
                            sb.append(String.format(parmPhrase1_th, criterion.getCondition(), i, j,criterion.getTypeHandler()));
                        }
                    } else if (criterion.isBetweenValue()) {
                        if (criterion.getTypeHandler() == null) {
                            sb.append(String.format(parmPhrase2, criterion.getCondition(), i, j, i, j));
                        } else {
                            sb.append(String.format(parmPhrase2_th, criterion.getCondition(), i, j, criterion.getTypeHandler(), i, j, criterion.getTypeHandler()));
                        }
                    } else if (criterion.isListValue()) {
                        sb.append(criterion.getCondition());
                        sb.append(" (");
                        List<?> listItems = (List<?>) criterion.getValue();
                        boolean comma = false;
                        for (int k = 0; k < listItems.size(); k++) {
                            if (comma) {
                                sb.append(", ");
                            } else {
                                comma = true;
                            }
                            if (criterion.getTypeHandler() == null) {
                                sb.append(String.format(parmPhrase3, i, j, k));
                            } else {
                                sb.append(String.format(parmPhrase3_th, i, j, k, criterion.getTypeHandler()));
                            }
                        }
                        sb.append(')');
                    }
                }
                sb.append(')');
            }
        }
        
        if (sb.length() > 0) {
            WHERE(sb.toString());
        }
    }
}