package com.carmall.dao;

import com.carmall.entity.MerchantStoreActive;
import com.carmall.entity.MerchantStoreActiveExample;
import java.util.List;

public interface MerchantStoreActiveDAO {
    int countByExample(MerchantStoreActiveExample example);

    int deleteByExample(MerchantStoreActiveExample example);

    int deleteByPrimaryKey(Long id);

    void insert(MerchantStoreActive record);

    void insertSelective(MerchantStoreActive record);

    List<MerchantStoreActive> selectByExampleWithBLOBs(MerchantStoreActiveExample example);

    List<MerchantStoreActive> selectByExampleWithoutBLOBs(MerchantStoreActiveExample example);

    MerchantStoreActive selectByPrimaryKey(Long id);

    int updateByExampleSelective(MerchantStoreActive record, MerchantStoreActiveExample example);

    int updateByExampleWithBLOBs(MerchantStoreActive record, MerchantStoreActiveExample example);

    int updateByExampleWithoutBLOBs(MerchantStoreActive record, MerchantStoreActiveExample example);

    int updateByPrimaryKeySelective(MerchantStoreActive record);

    int updateByPrimaryKeyWithBLOBs(MerchantStoreActive record);

    int updateByPrimaryKeyWithoutBLOBs(MerchantStoreActive record);
}