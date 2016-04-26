/**
 * 文件名：com.carmall.dao.MerchantStoreActiveDao.java<br/>
 * 创建时间：2016年4月26日 下午5:27:17<br/>
 * 创建者：Administrator<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package com.carmall.dao;

import java.util.List;

import com.carmall.core.dao.BaseDao;
import com.carmall.entity.MerchantStoreActive;
import com.carmall.entity.MerchantStoreActiveExample;

/**
 * TODO 一句话描述类的主要作用<br/>
 * <p>
 * TODO 该类的详细描述<br/>
 * <p>
 * @author Administrator
 * @date 2016年4月26日 下午5:27:17
 * @version 1.0.0
 * @since 1.0.0
 */
public class MerchantStoreActiveDao extends BaseDao implements MerchantStoreActiveMapper {
	
	

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#countByExample(com.carmall.entity.MerchantStoreActiveExample)
	 */
	public int countByExample(MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		MerchantStoreActiveMapper mapper = this.getSqlSession().getMapper(MerchantStoreActiveMapper.class);
		return mapper.countByExample(example);
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#deleteByExample(com.carmall.entity.MerchantStoreActiveExample)
	 */
	public int deleteByExample(MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#deleteByPrimaryKey(java.lang.Long)
	 */
	public int deleteByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#insert(com.carmall.entity.MerchantStoreActive)
	 */
	public int insert(MerchantStoreActive record) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#insertSelective(com.carmall.entity.MerchantStoreActive)
	 */
	public int insertSelective(MerchantStoreActive record) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#selectByExampleWithBLOBs(com.carmall.entity.MerchantStoreActiveExample)
	 */
	public List<MerchantStoreActive> selectByExampleWithBLOBs(MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#selectByExample(com.carmall.entity.MerchantStoreActiveExample)
	 */
	public List<MerchantStoreActive> selectByExample(MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#selectByPrimaryKey(java.lang.Long)
	 */
	public MerchantStoreActive selectByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByExampleSelective(com.carmall.entity.MerchantStoreActive, com.carmall.entity.MerchantStoreActiveExample)
	 */
	public int updateByExampleSelective(MerchantStoreActive record, MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByExampleWithBLOBs(com.carmall.entity.MerchantStoreActive, com.carmall.entity.MerchantStoreActiveExample)
	 */
	public int updateByExampleWithBLOBs(MerchantStoreActive record, MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByExample(com.carmall.entity.MerchantStoreActive, com.carmall.entity.MerchantStoreActiveExample)
	 */
	public int updateByExample(MerchantStoreActive record, MerchantStoreActiveExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByPrimaryKeySelective(com.carmall.entity.MerchantStoreActive)
	 */
	public int updateByPrimaryKeySelective(MerchantStoreActive record) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByPrimaryKeyWithBLOBs(com.carmall.entity.MerchantStoreActive)
	 */
	public int updateByPrimaryKeyWithBLOBs(MerchantStoreActive record) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see com.carmall.dao.MerchantStoreActiveMapper#updateByPrimaryKey(com.carmall.entity.MerchantStoreActive)
	 */
	public int updateByPrimaryKey(MerchantStoreActive record) {
		// TODO Auto-generated method stub
		return 0;
	}
	//TODO 记得要写注释，方便别人，成就自己。
}

