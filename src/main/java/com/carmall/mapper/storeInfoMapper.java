package com.carmall.mapper;

import com.carmall.entity.storeInfo;
import com.carmall.entity.storeInfoWithBLOBs;

public interface storeInfoMapper {
    int deleteByPrimaryKey(Long id);

    int insert(storeInfoWithBLOBs record);

    int insertSelective(storeInfoWithBLOBs record);

    storeInfoWithBLOBs selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(storeInfoWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(storeInfoWithBLOBs record);

    int updateByPrimaryKey(storeInfo record);
}